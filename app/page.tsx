import { Button } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-4 flex-col">
      <h1 className="text-xl">Next antd tailwind Starter</h1>
      <Button type="primary">Ant D Button</Button>
    </div>
  );
}
