import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks/pure';

import useBreedGalery from '../../apiHooks/useBreedGalery';

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
    const { result, waitForNextUpdate } = renderHook(() => useBreedGalery());
    expect(result.current.GaleryBreed).toBeDefined();
    expect(result.current.GaleryBreed).toMatchObject(loading);
    await waitForNextUpdate();
    expect(result.current.GaleryBreed).toMatchObject(data);
  });

  it('error message', async () => {
    const response = { message: 'mesage122' };
    const messageError = {
      loading: false,
      error: 'mesage122',
      data: [],
    };
    axios.get.mockRejectedValueOnce(response);
    const { result, waitForNextUpdate } = renderHook(() => useBreedGalery());
    await waitForNextUpdate();
    expect(result.current.GaleryBreed.error).toBeDefined();
    expect(result.current.GaleryBreed).toEqual(messageError);
  });

  it('error response', async () => {
    const mock = { response: 'response' };
    const errorResponse = {
      data: [],
      error: 'response',
      loading: false,
    };
    axios.get.mockRejectedValueOnce(mock);
    const { result, waitForNextUpdate } = renderHook(() => useBreedGalery());
    // expect(result.current).toBeDefined();
    await waitForNextUpdate();
    expect(result.current.GaleryBreed).toEqual(errorResponse);
  });

  it('error request', async () => {
    const Mockresponse = { request: 'request' };
    const ErrorRequest = {
      data: [],
      error: 'request',
      loading: false,
    };
    axios.get.mockRejectedValueOnce(Mockresponse);
    const { result, waitForNextUpdate } = renderHook(() => useBreedGalery());
    await waitForNextUpdate();
    expect(result.current.GaleryBreed).toEqual(ErrorRequest);
  });
});
