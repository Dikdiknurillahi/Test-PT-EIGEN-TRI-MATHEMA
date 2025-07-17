import { Button } from "antd";
export function ButtonBack(url:string) {
  return (
    <div className="flex justify-around mt-9">
    <Button className="w-30" color="primary" variant="outlined" href="/posts">
            <span className="text-lg">Back</span>
    </Button>
    <Button className="w-40" color="primary" variant="solid" target="blank" href={url}>
            <span className="text-lg">Continues Read</span>
    </Button>
    </div>
  );
}