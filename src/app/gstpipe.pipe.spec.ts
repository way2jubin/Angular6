import { GstpipePipe } from './gstpipe.pipe';

describe('GstpipePipe', () => {
  it('create an instance', () => {
    const pipe = new GstpipePipe();
    expect(pipe).toBeTruthy();
  });
});
