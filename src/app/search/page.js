"use client";

import { Button } from "@/components/ui/button";
import ThemeSwitch from "@/components/theme_switch";
import SearchBar from "@/components/search_bar";
import { useState } from "react";



export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([
        { id: 1, name: "제품명1", price: "10,000원" },
        { id: 2, name: "제품명2", price: "20,000원" },
        { id: 3, name: "제품명3", price: "30,000원" },
        { id: 4, name: "제품명3", price: "30,000원" },
        { id: 5, name: "제품명3", price: "30,000원" },
        { id: 6, name: "제품명3", price: "30,000원" },
        { id: 7, name: "제품명3", price: "30,000원" },
        { id: 8, name: "제품명3", price: "30,000원" },
        { id: 9, name: "제품명3", price: "30,000원" },
        { id: 10, name: "제품명3", price: "30,000원" },
    ]);

  return (
    <div className="min-h-screen min-w-[1440px] min-h-[768px] bg-background text-foreground overflow-auto">
      {/* 상단 네비게이션 바 */}
      <header className="flex items-center justify-between p-4 border-b">
        <div className="text-xl font-bold">🛒 스마트픽</div>
        {/* <input type="text" placeholder="검색창" className="p-2 border rounded-md w-1/3" /> */}
        <div className="w-1/3">
          <SearchBar />
        </div>
        <div className="flex items-center gap-4">
          <Button>로그인</Button>
          <Button>회원가입</Button>
          <Button>마이페이지</Button>
          <Button>장바구니</Button>
          <ThemeSwitch />
        </div>
      </header>

      {/* 본문 레이아웃 */}
      <main className="p-8">
        <div className="flex gap-6">
          {/* 왼쪽 사이드바 */}
          <aside className="w-1/6 flex flex-col space-y-4">
            <div>
              <h2 className="text-lg mb-2">필터</h2>
              <Button variant="outline" className="block border p-2 mb-2 w-full">가격대</Button>
              <Button variant="outline" className="block border p-2 mb-2 w-full">브랜드</Button>
              <Button variant="outline" className="block border p-2 mb-2 w-full">평점</Button>
            </div>
            <div className="h-full"/> {/* 필터링 버튼과 적용버튼 간격 */}
            <div className="mt-auto">
              <Button className="block border p-2 mb-2 w-full">적용</Button>
            </div>
          </aside>

          {/* 메인 콘텐츠 */}
          <section className="flex-1 max-h-[800px] overflow-y-auto">
            {products.map((product) => (
                <div key={product.id} className="flex items-center border p-4 mb-4 rounded">
                <div className="w-20 h-20 bg-gray-200 mr-4"></div>
                <div>
                    <p className="text-lg">{product.name}</p>
                    <p>{product.price}</p>
                </div>
                </div>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}