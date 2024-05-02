import { dynamicLinks } from "config/routingLinks.ts";

import { TBreadcrumbsItem } from "components/ui/breadcrumbs/types.ts";
import { TTest } from "types/entities/TTest.ts";
import { TUser } from "types/entities/TUser.ts";

export const breadcrumbsConfig = (test: TTest, user: TUser): TBreadcrumbsItem[] => ([
  {
    title: test?.title,
    link: dynamicLinks.results(test?.id)
  },
  {
    title: user?.name
  }
])