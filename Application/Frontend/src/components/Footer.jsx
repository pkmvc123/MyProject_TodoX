import React from "react";

const Footer = ({
  statusTaskCount = { pendingCount: 0, completeCount: 0 },
}) => {
  return (
    <>
      {statusTaskCount.pendingCount + statusTaskCount.completeCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {statusTaskCount.pendingCount > 0
              ? `You have ${statusTaskCount.pendingCount} incomplete Tasks out of a Total of ${statusTaskCount.completeCount} Tasks.`
              : `You have ${statusTaskCount.completeCount} Tasks.`}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
