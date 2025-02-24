import { Button } from "@/components/ui/button";
import ThemeSwitch from "@/components/theme_switch";
import SearchBar from "@/components/search_bar";

export default async function CategoryPage({ params }) {
  const category = (await params).category

  const categories = ['전체', '데스크탑', '냉장고', '세탁기'];
  const products = Array(8).fill({
    name: '제품명',
    price: '가격',
  });

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

      <nav className="flex border-b mb-8">
        {categories.map((category) => (
          <button key={category} className="p-4 hover:bg-gray-200">
            {category}
          </button>
        ))}
      </nav>
      
      {/* 본문 레이아웃 */}
      <main className="p-8 ">
        <section className="grid grid-cols-6 gap-8 min-w-[1440px]">
            {products.map((product, index) => (
                <div key={index} className="border rounded-lg p-4">
                    <div className="bg-gray-300 h-48 mb-2"></div>
                    <h2 className="text-lg">{product.name}</h2>
                    <p className="text-sm text-gray-600">{product.price}</p>
                </div>
            ))}
        </section>
      </main>
    </div>
  );
}