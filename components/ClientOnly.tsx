import { useEffect, useState } from "react";

type ClientOnlyProps = {
  children?: React.ReactNode;
};
const ClientOnly: React.FC<ClientOnlyProps> = ({
  children,
  ...passThroughProps
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <div {...passThroughProps}>{children}</div>;
};

export default ClientOnly;
