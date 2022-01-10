import React, { useCallback } from "react";

import moment from "moment";

import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { ToolbarProps } from "react-big-calendar";

import { Text } from "UI/atoms/Text";
import { LayoutContainer } from "UI/layout/LayoutContainer";
import { breakpoints } from "styles/variables/breakpoints";

const CalendarToolbarContainer = styled.div``;

const Label = styled.label`
  ${({
    theme: {
      breakpoints: { breakpoint640 },
      spacing: { spacing16 }
    }
  }): FlattenSimpleInterpolation => css`
    @media(max-width: ${breakpoint640}) {
      margin-bottom: ${spacing16};
    }
  `};
`;

const Button = styled.button`
  ${({
    theme: {
      colorPalette: { blue400, blue600, white },
      easing: { easeInOut },
      fontSizes: { font16 },
      spacing: { spacing4, spacing8 },
      transitionTimes: { fast }

    }
  }): FlattenSimpleInterpolation => css`
    background-color: ${blue400};
    color: ${white};
    cursor: pointer;
    font-size: ${font16};
    padding: ${spacing4} ${spacing8};

    &:hover {
      background-color: ${blue600};
      transition: all ${fast} ${easeInOut};
    }
  `};
`;

const calendarToolbarCustomCss = `
  flex-flow: row nowrap;
  justify-content: space-between;

  @media(max-width: ${breakpoints.breakpoint640}) {
    flex-flow: column nowrap;
    justify-content: center;
  }
`;

const CalendarToolbar: React.FC<ToolbarProps> = ({
  date,
  onNavigate,
  onView
}) => {
  const goToBack = useCallback(() => {
    onNavigate("PREV");
  }, [onNavigate]);

  const goToNext = useCallback(() => {
    onNavigate("NEXT");
  }, [onNavigate]);

  const goToCurrent = useCallback(() => {
    onNavigate("TODAY");
  }, [onNavigate]);

  const goToDayView = useCallback(() => {
    onView("day");
  }, [onView]);

  const goToWeekView = useCallback(() => {
    onView("week");
  }, [onView]);

  const goToMonthView = useCallback(() => {
    onView("month");
  }, [onView]);

  const renderLabel = useCallback(() => {
    const _date = moment(date);
    
    return (
      <Text
        fontSize="font20"
        fontWeight="medium"
      >
        {_date.format("MMMM")} {_date.format("YYYY")}
      </Text>
    );
  }, [date]);

  return (
    <CalendarToolbarContainer>
      <LayoutContainer
        customCss={calendarToolbarCustomCss}
        display="flex"
        marginBottom="spacing16"
        marginTop="spacing16"
      >
        <Label className="label-date">{renderLabel()}</Label>

        <LayoutContainer>
          <Button onClick={goToMonthView}>Month</Button>
          <Button onClick={goToWeekView}>Week</Button>
          <Button onClick={goToDayView}>Day</Button>
        </LayoutContainer>
      </LayoutContainer>

      <LayoutContainer
        display="flex"
        marginBottom="spacing16"
        marginTop="spacing16"
      >
        <Button onClick={goToBack}>&#8249; Prev</Button>
        <Button onClick={goToCurrent}>Today</Button>
        <Button onClick={goToNext}>Next &#8250;</Button>
      </LayoutContainer>
    </CalendarToolbarContainer >
  );
};

export { CalendarToolbar };
