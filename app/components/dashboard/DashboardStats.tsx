import prisma from "@/app/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";

async function getData() {
  const [user, products, order] = await Promise.all([
    prisma.user.findMany({
      select: {
        id: true,
      },
    }),

    prisma.product.findMany({
      select: {
        id: true,
      },
    }),

    prisma.order.findMany({
      select: {
        amount: true,
      },
    }),
  ]);

  return {
    user,
    products,
    order,
  };
}

export async function DashboardStats() {
  const { products, user, order } = await getData();

  const totalAmount = order.reduce((accumalator, currentValue) => {
    return accumalator + currentValue.amount;
  }, 0);
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Tổng Doanh Thu</CardTitle>
          <DollarSign className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            {new Intl.NumberFormat("en-US").format(totalAmount / 100)}đ
          </p>
          <p className="text-xs text-muted-foreground">
            100 giao dịch gần nhất
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Doanh Thu</CardTitle>
          <ShoppingBag className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">+{order.length}</p>
          <p className="text-xs text-muted-foreground">
            Tổng doanh thu bán hàng trong của cửa hàng
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Sản Phẩm</CardTitle>
          <PartyPopper className="h-4 w-4 text-indigo-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{products.length}</p>
          <p className="text-xs text-muted-foreground">
            Tổng số sản phẩm đã tạo
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Tài Khoản</CardTitle>
          <User2 className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">{user.length}</p>
          <p className="text-xs text-muted-foreground">
            Tổng tài khoản đăng ký
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
