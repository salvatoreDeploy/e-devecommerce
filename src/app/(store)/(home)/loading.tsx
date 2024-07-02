import { SkeletonScreen } from '@/Components/SkeletonScreen'

export default function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
      <SkeletonScreen className="col-span-6 row-span-6 h-[856px] bg-zinc-50/10 animate-pulse rounded-md" />

      <SkeletonScreen className="col-span-3 row-span-3" />
      <SkeletonScreen className="col-span-3 row-span-3" />
    </div>
  )
}
