import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 120,
          background: '#1E2A24',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#C5A46D',
          fontFamily: 'serif',
          fontWeight: 600,
          borderRadius: '50%',
          border: '6px solid #C5A46D',
        }}
      >
        B
      </div>
    ),
    {
      ...size,
    }
  );
}
