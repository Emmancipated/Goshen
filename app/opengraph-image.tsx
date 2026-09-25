import { ImageResponse } from "next/og";

export default function opengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F7F3EC",
          padding: "60px 80px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "8px",
            backgroundColor: "#A04236",
            marginBottom: "48px",
            borderRadius: "4px",
          }}
        />
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "24px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              backgroundColor: "#362454",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="44"
              height="44"
              viewBox="0 0 512 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256 96 L416 224 L352 288 L256 200 L160 288 L96 224 Z" fill="#F7F3EC" />
            </svg>
          </div>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "56px",
              fontWeight: "bold",
              color: "#362454",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Goshen Shelters
          </h1>
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "32px",
              color: "#A04236",
              margin: 0,
              fontWeight: "500",
            }}
          >
            A safe place. A new beginning.
          </p>
          <div
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#362454",
              opacity: 0.2,
              marginTop: "16px",
              marginBottom: "8px",
            }}
          />
          <p
            style={{
              fontFamily: "system-ui, sans-serif",
              fontSize: "22px",
              color: "#5E5752",
              margin: 0,
            }}
          >
            Confidential help 24/7 · 0701 854 9218
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "60px",
            fontFamily: "system-ui, sans-serif",
            fontSize: "16px",
            color: "#8C8379",
          }}
        >
          goshenshelters.org
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
