import React, { useCallback } from "react";

import moment from "moment";

import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { breakpoints } from "styles/variables/breakpoints";

import { Text } from "UI/atoms/Text";
import { Button } from "UI/molecules/Button";
import { LayoutContainer } from "UI/layout/LayoutContainer";

import { IToolbarProps } from "UI/molecules/__typings__/CalendarToolbar";

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

const calendarToolbarCustomCss = `
  flex-flow: row nowrap;
  justify-content: space-between;

  @media(max-width: ${breakpoints.breakpoint640}) {
    flex-flow: column nowrap;
    justify-content: center;
  }
`;

const CalendarToolbar: React.FC<IToolbarProps> = ({
  date,
  isLoading,
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
          <Button
            buttonText="Month"
            isDisabled={isLoading}
            onClick={goToMonthView}
          />
          <Button
            buttonText="Week"
            isDisabled={isLoading}
            onClick={goToWeekView}
          />
          <Button
            buttonText="Day"
            isDisabled={isLoading}
            onClick={goToDayView}
          />
        </LayoutContainer>
      </LayoutContainer>

      <LayoutContainer
        display="flex"
        marginBottom="spacing16"
        marginTop="spacing16"
      >
        <Button
          buttonText="Prev"
          isDisabled={isLoading}
          onClick={goToBack}
        />
        <Button
          buttonText="Today"
          isDisabled={isLoading}
          onClick={goToCurrent}
        />
        <Button
          buttonText="Next"
          isDisabled={isLoading}
          onClick={goToNext}
        />
      </LayoutContainer>
    </CalendarToolbarContainer >
  );
};

export { CalendarToolbar };
