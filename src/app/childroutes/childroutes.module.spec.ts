import { ChildroutesModule } from './childroutes.module';

describe('ChildroutesModule', () => {
  let childroutesModule: ChildroutesModule;

  beforeEach(() => {
    childroutesModule = new ChildroutesModule();
  });

  it('should create an instance', () => {
    expect(childroutesModule).toBeTruthy();
  });
});
