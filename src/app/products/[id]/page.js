import { Button } from "@/components/ui/button";
import ThemeSwitch from "@/components/theme_switch";
import SearchBar from "@/components/search_bar";

export default async function Products({ params }) {
    const id = (await params).id
    return(
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
            <main className="p-8 ">
                <div className="p-8 max-w-5xl mx-auto space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                        {/* 상품 이미지 */}
                        <div className="border rounded-2xl h-96 flex items-center justify-center bg-gray-100">
                        <span className="text-lg text-gray-500">상품 이미지</span>
                        </div>

                        {/* 상품 정보 */}
                        <div className="border rounded-2xl p-6 space-y-4">
                        <h1 className="text-2xl font-bold">상품명</h1>
                        <p className="text-xl text-gray-600">가격</p>
                        <div className="space-y-2">
                            <p className="font-medium">옵션</p>
                            <p>색깔</p>
                            <p>모델</p>
                        </div>
                        <div className="space-y-2">
                            <button className="w-full p-2 bg-blue-500 text-white rounded-lg">장바구니 넣기</button>
                            <button className="w-full p-2 border rounded-lg">바로 결제</button>
                        </div>
                        </div>
                    </div>

                    {/* 상세 정보, 리뷰, Q&A */}
                    <div className="border rounded-2xl p-6">
                        <h2 className="text-xl font-semibold">제품정보</h2>
                    </div>
                    <div className="border rounded-2xl p-6">
                        <h2 className="text-xl font-semibold">사용자 리뷰</h2>
                    </div>
                    <div className="border rounded-2xl p-6">
                        <h2 className="text-xl font-semibold">Q&A</h2>
                    </div>
                </div>
            </main>
        </div>     
    );
}