import { useState } from "react";
import {
  ShoppingCart,
  Search,
  Menu,
  User,
  Heart,
  Truck,
  Shield,
  Star,
  Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const [cartCount, setCartCount] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      name: "방울토마토",
      price: "6,500원",
      originalPrice: "8,500원",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 156,
      discount: "24%",
      organic: true,
    },
    {
      id: 2,
      name: "신선한 시금치",
      price: "3,200원",
      originalPrice: "4,200원",
      image: "/api/placeholder/300/300",
      rating: 4.6,
      reviews: 89,
      discount: "24%",
      organic: true,
    },
    {
      id: 3,
      name: "국산 당근",
      price: "2,800원",
      originalPrice: "3,600원",
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 203,
      discount: "22%",
      organic: true,
    },
    {
      id: 4,
      name: "유기농 배추",
      price: "4,500원",
      originalPrice: "6,000원",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 178,
      discount: "25%",
      organic: true,
    },
    {
      id: 5,
      name: "호박",
      price: "3,800원",
      originalPrice: "5,000원",
      image: "/api/placeholder/300/300",
      rating: 4.5,
      reviews: 124,
      discount: "24%",
      organic: true,
    },
    {
      id: 6,
      name: "곶감",
      price: "12,000원",
      originalPrice: "15,000원",
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 95,
      discount: "20%",
      organic: true,
    },
    {
      id: 7,
      name: "말린 고추",
      price: "8,500원",
      originalPrice: "11,000원",
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 67,
      discount: "23%",
      organic: true,
    },
    {
      id: 8,
      name: "참외",
      price: "7,200원",
      originalPrice: "9,500원",
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 142,
      discount: "24%",
      organic: true,
    },
  ];

  const categories = [
    { name: "채소", icon: "🥬", count: 45 },
    { name: "과일", icon: "🍎", count: 23 },
    { name: "나물/산채", icon: "🌿", count: 28 },
    { name: "곡물/콩류", icon: "🌾", count: 15 },
    { name: "건조식품", icon: "🌶️", count: 18 },
    { name: "약초/허브", icon: "🍃", count: 12 },
  ];

  const addToCart = (productId: number) => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-primary">신선마켓</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                홈
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                카테고리
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                특가상품
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                신상품
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 max-w-sm">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="상품을 검색하세요" className="pl-10" />
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/30">
        <div className="container px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="text-primary">신선한</span>
                  <br />
                  농산물을
                  <br />
                  <span className="text-primary">집까지</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-md">
                  농장에서 바로 배송되는 신선한 유기농 농산물을 만나보세요.
                  건강한 식탁의 시작입니다.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  지금 쇼핑하기
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  농장 둘러보기
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">무료 배송</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">품질 보장</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">4.8+ 평점</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 md:h-[500px] bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center">
                <div className="text-8xl">🥬</div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">🍎</span>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-xl">🥕</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">카테고리별 쇼핑</h3>
            <p className="text-muted-foreground">
              다양한 신선 농산물을 카테고리별로 만나보세요
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h4 className="font-semibold mb-1">{category.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {category.count}개 상품
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">인기 상품</h3>
            <p className="text-muted-foreground">
              가장 사랑받는 신선 농산물들을 만나보세요
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="w-full h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-t-lg flex items-center justify-center">
                      <span className="text-6xl">🥬</span>
                    </div>
                    {product.discount && (
                      <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                        {product.discount} 할인
                      </Badge>
                    )}
                    {product.organic && (
                      <Badge className="absolute top-3 right-3 bg-primary/10 text-primary">
                        <Leaf className="w-3 h-3 mr-1" />
                        유기농
                      </Badge>
                    )}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">{product.name}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-lg font-bold text-primary">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button
                      className="w-full"
                      onClick={() => addToCart(product.id)}
                    >
                      ���바구니 담기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">무료 배송</h4>
              <p className="text-muted-foreground">
                5만원 이상 주문 시 전국 무료 배송으로 신선하게 배달해드립니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">품질 보장</h4>
              <p className="text-muted-foreground">
                엄격한 품질 검사를 통과한 신선한 농산물만을 엄선하여 제공합니다.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">친환경 재배</h4>
              <p className="text-muted-foreground">
                자연 친화적인 방법으로 재배된 신선하고 건강한 농산물입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-primary-foreground" />
                </div>
                <h1 className="text-xl font-bold text-primary">신선마켓</h1>
              </div>
              <p className="text-muted-foreground mb-4">
                농장에서 직접 배송되는 신선한 농산물을 만나보세요.
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">4.8</span>
                <span className="text-sm text-muted-foreground">
                  (2,847 리뷰)
                </span>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">쇼핑</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    과일
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    채소
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    곡물
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    견과류
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">고객 서비스</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    주문 조회
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    배송 정보
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    반품/교환
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    고객센터
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">회사 정보</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    회사 소개
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    이용약관
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    개인정보처리방침
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    파트너십
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 신선마켓. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
