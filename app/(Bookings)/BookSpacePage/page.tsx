import { getWorkspaces } from "../../actions/spaces";
import { mapWorkspaceToSpaceItem } from "../../lib/utils";
import BookSpaceClient from "./BookSpaceClient";

export default async function BookSpacePage() {
  const workspaces = await getWorkspaces();

  return (
    <BookSpaceClient
      initialSpaces={workspaces.map(mapWorkspaceToSpaceItem)}
      initialOccupiedIds={workspaces
        .filter((w) => !w.is_available)
        .map((w) => w.id)}
    />
  );
}
