import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
import ProductsClient from "@/components/ProductsClient";

const page = () => {
  return (
    <NextLayout>
      <ProductsClient />
    </NextLayout>
  );
};
export default page;