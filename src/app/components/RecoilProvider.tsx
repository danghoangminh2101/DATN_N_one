// app/components/RecoilProvider.tsx
"use client"; // Vì Recoil yêu cầu chạy ở client-side

import { RecoilRoot } from "recoil";

export default function RecoilProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
