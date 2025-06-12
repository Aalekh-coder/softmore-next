import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea"


const ContactFrom = () => {
  return (
    <Card className="px-5 py-4 lg:w-1/2 mx-auto mt-4">
      <div className="px-3 py-2">
        <Label htmlFor="">Name</Label>
        <Input />
      </div>
      <div className="px-3 py-2">
        <Label htmlFor="">Phone No.</Label>
        <Input type="phone" />
      </div>
      <div className="px-3 py-2">
        <Label htmlFor="">Email</Label>
        <Input type="email" />
      </div>
      <div className="px-3 py-2">
        <Label htmlFor="">Query</Label>
        <Textarea  />
      </div>
      <div className="px-3 py-2 text-center w-full">
        <Button className="">Submit</Button>
      </div>
    </Card>
  );
};

export default ContactFrom;
