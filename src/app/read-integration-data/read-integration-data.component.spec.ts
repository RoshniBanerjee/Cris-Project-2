import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadIntegrationDataComponent } from './read-integration-data.component';

describe('ReadIntegrationDataComponent', () => {
  let component: ReadIntegrationDataComponent;
  let fixture: ComponentFixture<ReadIntegrationDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadIntegrationDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadIntegrationDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
