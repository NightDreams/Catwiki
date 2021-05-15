import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks/pure';

import useBreedList from '../../apiHooks/useBreedList';

jest.mock('axios');
const useApiMock = {
  data: { title: 'Hello' },
};
const loading = {
  loading: true,
  error: false,
  data: [],
};
const data = {
  loading: false,
  error: false,
  data: { title: 'Hello' },
};

describe('useBreedList Hook', () => {
  it('initialState and success query ', async () => {
    axios.get.mockResolvedValue(useApiMock);
    const { result, waitForNextUpdate } = renderHook(() => useBreedList());
    expect(result.current.BreedList).toBeDefined();
    expect(result.current.BreedList).toMatchObject(loading);
    await waitForNextUpdate();
    expect(result.current.BreedList).toMatchObject(data);
  });

  it('error message', async () => {
    const response = { message: 'mesage122' };
    const messageError = {
      data: [],
      error: { message: 'mesage122' },
      loading: false,
    };
    axios.get.mockRejectedValueOnce(response);
    const { result, waitForNextUpdate } = renderHook(() => useBreedList());
    await waitForNextUpdate();
    expect(result.current.BreedList.error.message).toBeDefined();
    expect(result.current.BreedList).toEqual(messageError);
  });

  it('error response', async () => {
    const mock = { response: 'response' };
    const errorResponse = {
      data: [],
      error: 'response',
      loading: false,
    };
    axios.get.mockRejectedValueOnce(mock);
    const { result, waitForNextUpdate } = renderHook(() => useBreedList());
    expect(result.current).tobe;
    await waitForNextUpdate();
    expect(result.current.BreedList).toEqual(errorResponse);
  });

  it('error request', async () => {
    const Mockresponse = { request: 'request' };
    const ErrorRequest = {
      data: [],
      error: 'request',
      loading: false,
    };
    axios.get.mockRejectedValueOnce(Mockresponse);
    const { result, waitForNextUpdate } = renderHook(() => useBreedList());
    await waitForNextUpdate();
    expect(result.current.BreedList).toEqual(ErrorRequest);
  });
});
