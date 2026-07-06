import { Skeleton } from "../ui/skeleton";

export function RatingSectionSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 my-5 lg:grid-cols-4">
      <div className="flex flex-col bg-accent p-4 place-content-start gap-5 py-5 rounded-lg border border-slate-800 lg:col-span-1 w-full">
        <div className="flex items-center gap-3 w-full">
          <div
            className={`flex flex-col gap-0.5 p-2 px-3 text-center rounded select-none`}
          >
            <Skeleton className="size-5 lg:size-8" />
          </div>
          <div className="flex flex-col w-[50%] gap-2">
            <p className="text-[10px] font-bold tracking-wider uppercase text-slate-500">
              Rating IGRS
            </p>
            <Skeleton className="w-full h-2" />
          </div>
        </div>
        {Array.from({ length: 8 }, (_, index) => index + 1).map((_, idx) => (
          <Skeleton key={idx} className={`h-2 w-full`} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, index) => index + 1).map((_, idx) => (
          <div
            key={idx}
            className="group bg-slate-900/30 border border-slate-800/80 rounded-xl overflow-hidden shadow-m flex flex-col justify-between"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
              <Skeleton className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

              <Skeleton
                className={`absolute flex flex-col bottom-0 m-3 px-2 py-1 text-center text-sm font-semibold rounded select-none bg-accent`}
              >
                <p className="font-pixel text-white text-base leading-none">
                  3+
                </p>
                <p className="text-[8px] font-bold tracking-wider leading-none text-white mt-0.5">
                  IGRS
                </p>
              </Skeleton>
            </div>
            <div className="flex gap-4 p-3">
              <div className="grid gap-2 w-full">
                <Skeleton className="h-3 bg-accent w-full" />
                <Skeleton className="h-3 bg-accent w-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RatingsBadgeSkeleton() {
  return (
    <div className={`grid grid-cols-3 gap-3 w-[50%]`}>
      {Array.from({ length: 3 }, (_, index) => index + 1).map((_, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <Skeleton className="h-3 w-full" />
        </div>
      ))}
    </div>
  );
}

export function GameStatsSkeleton() {
  return (
    <div className={`grid grid-cols-4 gap-3`}>
      {Array.from({ length: 4 }, (_, index) => index + 1).map((_, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <Skeleton className="h-20 lg:h-40 w-full" />
        </div>
      ))}
    </div>
  );
}

export function GameSectionSkeleton() {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3`}>
      {Array.from({ length: 8 }, (_, index) => index + 1).map((_, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <Skeleton className="h-30 lg:h-50 w-full" />
        </div>
      ))}
    </div>
  );
}

export function NewsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 py-2 lg:grid-cols-[1.8fr_1.2fr]">
      {/* kotak besar */}
      <div className="grid">
        <Skeleton className="h-screen w-full" />
      </div>
      <div className="grid gap-4 h-screen">
        {Array.from({ length: 4 }, (_, index) => index + 1).map((_, idx) => (
          <Skeleton key={idx} className="h-35 w-full" />
        ))}
      </div>
    </div>
  );
}

export function HeroLoadingSkeleton({ length }: { length: number }) {
  return (
    <div className={`flex items-center gap-3 w-[60%]`}>
      {Array.from({ length: length }, (_, index) => index + 1).map((_, idx) => (
        <Skeleton key={idx} className="h-5 w-full bg-accent/70" />
      ))}
    </div>
  );
}
