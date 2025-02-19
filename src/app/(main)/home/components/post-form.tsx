import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Divider } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

import { RadioTower, FileImage, Laugh } from 'lucide-react';
export function PostForm() {
    return (
        <div className='mb-4'>
            <Card>
                <CardHeader className='p-4'>
                    <CardTitle>
                        <div className='flex items-center'>
                            <Image
                                src="https://avatar.iran.liara.run/public"
                                alt="Post image"
                                width={48}
                                height={48}
                                style={{ objectFit: "cover" }}
                                className="rounded-full"
                            />
                            <Input className='ml-2' placeholder='Bạn đang cảm thấy thế nào?' />
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className='p-0'>
                    <Divider className='m-0!' />
                </CardContent>

                <CardFooter className="flex justify-around py-2">
                    <div className=''>
                        <Link className='flex items-center hover:bg-gray-300 p-2 rounded-sm transition-all duration-200' href="/live-stream">
                            Livestream
                            <RadioTower className='ml-2' />
                        </Link>

                    </div>
                    <div className=''>
                        <Link className='flex items-center hover:bg-gray-300 p-2 rounded-sm transition-all duration-200' href="/live-stream">
                            Ảnh
                            <FileImage className='ml-2' />
                        </Link>

                    </div>
                    <Link className='flex items-center hover:bg-gray-300 p-2 rounded-sm transition-all duration-200' href="/live-stream">
                        Cảm xúc
                        <Laugh className='ml-2' />
                    </Link>

                </CardFooter>
            </Card>
        </div>
    )
}
