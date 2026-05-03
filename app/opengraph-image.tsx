import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import path from "path";

export const alt = "המרכז ליישוב סכסוכים: בוררות וגישור באילת";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadHeebo(weight: 400 | 700): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Heebo:wght@${weight}&subset=hebrew`,
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
        },
      }
    ).then((r) => r.text());

    const url = css.match(/src: url\((.+?)\) format\('woff2'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function Image() {
  const logoData = readFileSync(path.join(process.cwd(), "public/Logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  const [boldFont, regularFont] = await Promise.all([
    loadHeebo(700),
    loadHeebo(400),
  ]);

  const fonts: {
    name: string;
    data: ArrayBuffer;
    weight: number;
    style: "normal";
  }[] = [];
  if (boldFont) fonts.push({ name: "Heebo", data: boldFont, weight: 700, style: "normal" });
  if (regularFont) fonts.push({ name: "Heebo", data: regularFont, weight: 400, style: "normal" });

  const fontFamily = fonts.length > 0 ? "Heebo" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#1E2A38",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          direction: "rtl",
          position: "relative",
        }}
      >
        {/* Gold border frame */}
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            right: "20px",
            bottom: "20px",
            border: "3px solid #C9A646",
            borderRadius: "12px",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "48px",
          }}
        >
          {/* Logo */}
          <img
            src={logoSrc}
            width={200}
            height={120}
            style={{ objectFit: "contain", marginBottom: "32px" }}
          />

          {/* Title */}
          <div
            style={{
              color: "white",
              fontSize: 48,
              fontWeight: 700,
              fontFamily,
              textAlign: "center",
              lineHeight: 1.35,
              maxWidth: "900px",
              marginBottom: "16px",
            }}
          >
            המרכז ליישוב סכסוכים: בוררות וגישור באילת
          </div>

          {/* Subtitle */}
          <div
            style={{
              color: "#C9A646",
              fontSize: 28,
              fontWeight: 400,
              fontFamily,
              textAlign: "center",
            }}
          >
            שירותי ADR לאנשים פרטיים, עסקים ומוסדות.
          </div>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
