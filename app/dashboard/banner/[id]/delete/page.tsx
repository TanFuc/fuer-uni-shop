import { deleteBanner } from "@/app/actions";
import { SubmitButton } from "@/app/components/SubmitButtons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function DeleteBannerRoute({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Bạn có hoàn toàn chắc chắn không?</CardTitle>
          <CardDescription>
            Không thể hoàn tác hành động này. Thao tác này sẽ xóa vĩnh viễn nội
            dung này biểu ngữ và xóa tất cả dữ liệu khỏi máy chủ.
          </CardDescription>
        </CardHeader>
        <CardFooter className="w-full flex justify-between">
          <Button variant="secondary" asChild>
            <Link href="/dashboard/banner">Hủy</Link>
          </Button>
          <form action={deleteBanner}>
            <input type="hidden" name="bannerId" value={params.id} />
            <SubmitButton variant="destructive" text="Xóa" />
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
