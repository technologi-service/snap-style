import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

interface Prop {
  description: string;
}

export const TabsDetalle = ({ description }: Prop) => {
  return (
    <Tabs className="w-full" defaultValue="description">
      <TabsList className="border-b">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="specifications">Specifications</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <div className="grid gap-4 text-sm leading-loose ">{description}</div>
      </TabsContent>
      <TabsContent value="reviews">
        <div className="grid gap-4 text-sm leading-loose ">
          <div className="flex  gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-4">
              <div className="flex gap-4 items-start">
                <div className="grid gap-0.5 text-sm">
                  <h3 className="font-semibold">Sarah Johnson</h3>
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    2 days ago
                  </time>
                </div>
                <div className="flex items-center gap-0.5 ml-auto">
                  iconography
                </div>
              </div>
              <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                <p>
                  I love this t-shirt! It&apos;s so soft and comfortable, and
                  the quality is amazing. I&apos;ve washed it several times and
                  it still looks brand new. Highly recommend!
                </p>
              </div>
            </div>
          </div>
          <Separator />
          <div className="flex gap-4 ">
            <Avatar className="w-10 h-10 border">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="grid gap-4">
              <div className="flex gap-4 items-start">
                <div className="grid gap-0.5 text-sm">
                  <h3 className="font-semibold">Alex Smith</h3>
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    3 weeks ago
                  </time>
                </div>
                <div className="flex items-center gap-0.5 ml-auto">
                  iconography
                </div>
              </div>
              <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                <p>
                  I&apos;ve been wearing this t-shirt for a few weeks now and
                  it&apos;s quickly become one of my favorites. The fit is
                  perfect, and the fabric is so soft and comfortable. I highly
                  recommend this product!
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="specifications">
        <div className="grid gap-4 text-sm leading-loose">
          <div>
            <h3 className="font-semibold">Material</h3>
            <p>100% combed cotton</p>
          </div>
          <div>
            <h3 className="font-semibold">Fit</h3>
            <p>Relaxed, classic crew neck</p>
          </div>
          <div>
            <h3 className="font-semibold">Care</h3>
            <p>Machine washable, tumble dry low</p>
          </div>
          <div>
            <h3 className="font-semibold">Dimensions</h3>
            <p>Length: 27 inches, Chest: 40 inches (size M)</p>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};
