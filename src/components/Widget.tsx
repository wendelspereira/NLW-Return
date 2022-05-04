import {ChatCenteredDots} from 'phosphor-react'
import {Popover} from '@headlessui/react'
export function Widget(){
    
    return (
        <Popover className='absolute botton-5 right-5'>
            <Popover.Panel>Hello World</Popover.Panel>
            <Popover.Button className='bg-brand-500 rouded-full px-3 h-12 text-white flex items-center group'>
                <ChatCenteredDots className='w-6 h-6'/>

                <span className='max-w-0overflow-hidden group-hover:max-w-xs transilion-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}