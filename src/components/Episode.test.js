import React from 'react';
import { userEvent } from '@testing-library/user-event';
import {
    render,
    fireEvent,
    waitForElement,
    wait,
    queryByText
  } from '@testing-library/react';
import Episodes from "./Episodes";

const season = [
    {
      id: 553946,
      name: "Chapter One: The Vanishing of Will Byers",
      season: 1,
      number: 1,
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
      }
    }
  ];


test('show list shows data when reendered', ()=>{
    const { queryAllByTestId, rerender }= render (<Episodes episodes={[]}/>)
    expect(queryAllByTestId ('card')).toStrictEqual([]);
    expect(queryAllByTestId('card')).toHaveLength(0)
    expect(queryAllByTestId('episode-list')).toHaveLength(1)
    // expect(queryAllByTestId('episode-list')).toStrictEqual({})
    

    rerender(<Episodes error="" episodes={season}/>)

})