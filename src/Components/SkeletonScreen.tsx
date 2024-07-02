import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export function SkeletonScreen({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={twMerge(className, 'bg-zinc-50/10 animate-pulse rounded-md')}
      {...props}
    />
  )
}
