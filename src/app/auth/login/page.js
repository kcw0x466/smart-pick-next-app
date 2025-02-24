import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ThemeSwitch from "@/components/theme_switch";
import SearchBar from "@/components/search_bar";

export default function LoginPage() {
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
              <main className="p-8">
                <div className="flex items-center justify-center">
                    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-lg">
                        <h1 className="text-center text-3xl font-bold text-black">로그인</h1>
                        <form className="space-y-4">
                            <div>
                                <Input
                                    type="text"
                                    placeholder="이메일 또는 사용자 이름"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <Input
                                    type="password"
                                    placeholder="비밀번호"
                                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full p-3 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                            >
                                로그인
                            </button>
                        </form>
                        <div className="text-center text-sm text-gray-600 space-y-2">
                            <p>아이디를 잊었나요?</p>
                            <p className="underline">비밀번호를 잊었나요?</p>
                            <p>
                                계정이 없나요?{' '}
                                <span className="underline">스마트픽에 가입하기</span>
                            </p>
                        </div>
                    </div>
                </div>
              </main>
            </div>   
    );
}