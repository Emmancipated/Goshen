"use client";

import { useState } from "react";

export default function AdminPage() {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setError("");
    setUrl("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload-video", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Upload failed");
      }

      const data = await res.json();
      setUrl(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-night-950">
        Upload Videos
      </h1>
      <p className="mt-2 text-night-600">
        Upload videos to Vercel Blob Storage. They will be served from the
        global CDN.
      </p>

      <form onSubmit={handleUpload} className="mt-8 space-y-4">
        <input
          type="file"
          accept="video/*"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="block w-full text-sm text-night-600 file:mr-4 file:rounded-full file:border-0 file:bg-gold-500 file:px-4 file:py-2 file:text-xs file:font-bold file:text-white hover:file:bg-gold-600"
        />

        <button
          type="submit"
          disabled={loading || !file}
          className="inline-flex items-center rounded-full bg-night-950 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-night-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {error && (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {url && (
        <div className="mt-6 rounded-lg border border-gold-200 bg-gold-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-night-700">
            Uploaded successfully
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block break-all text-sm text-gold-700 hover:underline"
          >
            {url}
          </a>
          <p className="mt-2 text-xs text-night-500">
            Copy this URL and use it in your video components or set it as
            `NEXT_PUBLIC_FOUNDER_VIDEO` in your env.
          </p>
        </div>
      )}
    </div>
  );
}