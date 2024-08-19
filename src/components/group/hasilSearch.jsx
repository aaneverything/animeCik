import React from "react";
import { Card, CardContent } from "../ui/card";

function hasilSearch() {
  return (
    <Card className="neo shadow-neo mt-3">
      <CardContent className="p-1 flex flex-row">
        <img
          className="w-28 mr-5"
          src="https://otakudesu.cloud/wp-content/uploads/2020/06/Jojo-part-4-Sub-Indo.jpg"
          alt=""
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Ajjjsembeere</h2>
          <p>Konten card Anda di sini.</p>
          <Link href="../episode">
            <Button className="mt-4">tonton sekarang</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default hasilSearch;
