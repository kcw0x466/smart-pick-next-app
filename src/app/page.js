"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 상단 네비게이션 바 */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="text-xl font-bold">🛒 스마트픽</div>
        <input type="text" placeholder="검색창" className="p-2 border rounded-md w-1/3" />
        <div className="flex items-center gap-4">
          <Button>로그인</Button>
          <Button>회원가입</Button>
          <Button>장바구니</Button>

          {/* 라이트/다크모드 토글 */}
          {mounted && (
            <Switch
              checked={theme === "dark"}
              onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
          )}
          <Label>{theme === "dark" ? "다크모드" : "라이트모드"}</Label>
        </div>
      </header>

      {/* 본문 레이아웃 */}
      <main className="p-8">
        <div className="flex gap-6">
          {/* 왼쪽 사이드바 */}
          <aside className="w-1/6 space-y-4">
            <div className="border-b pb-3 cursor-pointer hover:text-gray-400">컴퓨터</div>
            <div className="border-b pb-3 cursor-pointer hover:text-gray-400">여타 다른 전자제품</div>
            <div className="border-b pb-3 cursor-pointer hover:text-gray-400">전자제품</div>
            <div className="border-b pb-3 cursor-pointer hover:text-gray-400">전자제품</div>
            <div className="border-b pb-3 cursor-pointer hover:text-gray-400">전자제품</div>
          </aside>

          {/* 메인 콘텐츠 */}
          <section className="flex-1">
            <div className="text-center text-2xl font-bold p-8 border rounded-md">
              설문 기반 맞춤 상품 추천 시스템
            </div>

            {/* 상품 목록 */}
            <div className="grid grid-cols-4 gap-4 mt-8">
              <div className="p-8 border rounded-md text-center">상품사진</div>
              <div className="p-8 border rounded-md text-center">상품사진</div>
              <div className="p-8 border rounded-md text-center">상품사진</div>
              <div className="p-8 border rounded-md text-center">상품사진</div>
            </div>

            {/* 더보기 버튼 */}
            <div className="mt-4 text-center">
              <Button>더보기 →</Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}