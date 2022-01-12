import React from "react";

import moment from "moment";

import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import PropTypes from "prop-types";

import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { LayoutContainer } from "UI/layout/LayoutContainer";
import { CalendarToolbar } from "UI/molecules/CalendarToolbar";

import { colorPalette } from "styles/variables/colorPalette";
import { spacing } from "styles/variables/spacing";
import { fontSizes } from "styles/variables/fontSizes";

import { IHolidaysCalendarProps } from "UI/molecules/__typings__/HolidaysCalendar";

const localizer = momentLocalizer(moment);

const HolidaysCalendarContainer = styled(Calendar)`
  ${({
    theme: {
      breakpoints: { breakpoint640, breakpoint641, breakpoint800 },
      spacing: { spacing16, spacing400, spacing500, spacing800 },
      zIndex: { layer9 }
    }
  }): FlattenSimpleInterpolation => css`
    height: ${spacing800};
    margin-bottom: ${spacing16};
    z-index: ${layer9};

    @media(max-width: ${breakpoint800}) and (min-width: ${breakpoint641}) {
      height: ${spacing500};
    }

    @media(max-width: ${breakpoint640}) {
      height: ${spacing400};
    }
  `};
`;

function eventStyleGetter(event: { isPublic?: boolean }) {
  const isPublic = event?.isPublic;

  const style = {
    backgroundColor: isPublic ? colorPalette.black100 : colorPalette.green300,
    borderRadius: "0px",
    fontSize: fontSizes.font14,
    height: spacing.spacing16,
    opacity: 0.8,
    color: "white",
    border: "0px",
    display: "block"
  };

  return {
    style
  };
}

const HolidaysCalendar = ({
  eventsList,
  isLoading
}: IHolidaysCalendarProps): JSX.Element => (
  <LayoutContainer marginTop="spacing20">
    <HolidaysCalendarContainer
      components={{
        toolbar: (toolbar) =>  (
          <CalendarToolbar {...toolbar} isLoading={isLoading} />
        )
      }}
      defaultDate={new Date(2021, 0, 1)}
      eventPropGetter={eventStyleGetter}
      events={eventsList}
      localizer={localizer}
    />
  </LayoutContainer>
);

HolidaysCalendar.propTypes = {
  eventsList: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool
};

export { HolidaysCalendar };
