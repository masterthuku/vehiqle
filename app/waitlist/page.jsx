import React from "react";

const WaitListPage = () => {
  return (
    <div className="mt-20 fixed w-full h-full">
      <div className="aspect-video w-full">
        <iframe
          style={{
            width: "100%",
          }}
          height="569"
          src="https://vehiql-waitlist-form-937.created.app/waitlist"
          title="Waitlist"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default WaitListPage;
