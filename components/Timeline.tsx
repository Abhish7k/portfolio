import { cn } from "@/lib/utils";
import React from "react";

interface TimelineItemProps {
  active?: boolean;
  children: React.ReactNode;
  last?: boolean;
}

export const TimeLine = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full py-12 lg:py-16">{children}</div>;
};

export const TimeLineItem = ({ active, children, last }: TimelineItemProps) => {
  return (
    <div className={cn("w-full flex justify-start gap-6 border-neutral-800", !last && "border-l pb-16")}>
      <div className="relative">
        <div
          className={cn(
            "w-4 h-4 rounded-full absolute -top-0.5 -left-2 outline-neutral-900",
            active && "bg-blue-600",
            !active && "bg-neutral-800 w-3 h-3 left-[-5.5px]",
          )}
        >
          {active && <div className="top-0 left-0 w-4 h-4 rounded-full -z-10 bg-blue-600 animate-ping" />}
        </div>
      </div>

      <div className="flex flex-col gap-2 -mt-2">{children}</div>
    </div>
  );
};

const TimeLineItemTitle = ({ children }: { children: React.ReactNode }) => <p className="text-medium">{children}</p>;

const TimeLineItemDescription = ({ children }: { children: React.ReactNode }) => (
  <div className="text-base">{children}</div>
);

TimeLineItem.Title = TimeLineItemTitle;
TimeLineItem.Description = TimeLineItemDescription;
