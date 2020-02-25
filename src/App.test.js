import React from 'react';
import { userEvent } from '@testing-library/user-event';
import {
    render,
    fireEvent,
    waitForElement,
    wait,
    queryByText
  } from '@testing-library/react';
import App from './App';
// import Episodes from "./components/Episodes"
import { fetchShow as mockFetchShow } from './api/fetchShow';


jest.mock("./api/fetchShow");


const showData = {
    id: 2993,
    name: "Stranger Things",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
    },
    summary:
      "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    _embedded: {
      episodes: [
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
        },
        {
          id: 909340,
          name: "Chapter One: MADMAX",
          season: 2,
          number: 1,
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/331976.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/331976.jpg"
          }
        },
        {
          id: 1576469,
          name: "Chapter One: Suzie, Do You Copy?",
          season: 3,
          number: 1,
          runtime: 51,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/510098.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/510098.jpg"
          }
        }
      ]
    }
  };

    test ("app fetches data and render data", async()=>{
        mockFetchShow.mockResolvedValueOnce(showData)
        const {getByText, getAllByText, getByTestId, queryByText} = render(<App/>);
        getByText(/Fetching data.../i)
        await wait(()=>{
            getByTestId('fetching-data');
        });
   
    })
 
