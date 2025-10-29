import React from "react";
import type { LucideIcon } from "lucide-react";

type WorkItemProps = {
    Icon: LucideIcon,
    title: String,
    description: String
}

const WorkItem:  React.FC<WorkItemProps> = ({ Icon, title, description }) => {
  return (
    <div className="flex flex-1 flex-col items-center gap-3 rounded-lg border border-blush/50 bg-champagne/40 py-6 px-4 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold leading-tight text-charcoal">{title}</h3>
        <p className="text-sm font-normal leading-normal text-charcoal/70">{description}</p>
      </div>
    </div>
  );
};

export default WorkItem;
