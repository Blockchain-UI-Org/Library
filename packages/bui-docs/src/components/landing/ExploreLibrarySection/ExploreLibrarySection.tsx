import * as React from "react";
import styled from "styled-components";
import { Heading1 } from "../../atoms/Typography";
import { FieldsetHeadingWrapper } from "@site/src/shared/style";
import { FieldsetHeading } from "../../atoms/FieldsetHeading";

export interface IExploreLibrarySectionProps {}

export function ExploreLibrarySection(props: IExploreLibrarySectionProps) {
  return (
    <div className="container">
      <FieldsetHeading>
        <Heading1>
          EXPLORE OUR <span className="fancy-text">LIBRARY</span>
        </Heading1>
      </FieldsetHeading>
    </div>
  );
}
