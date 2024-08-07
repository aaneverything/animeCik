import React from 'react'
import Search from "@/components/group/search";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Card() {
  return (
    <div className="flex gap-4 mt-11">
    <Button className="mb-4">bismilah</Button>
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
    </Card>
  </div>
  )
}

export default Card