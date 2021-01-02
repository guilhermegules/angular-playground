import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-rater',
  templateUrl: './star-rater.component.html',
  styleUrls: ['./star-rater.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRaterComponent),
      multi: true,
    }
  ]
})
export class StarRaterComponent implements ControlValueAccessor {
  @Input() label: string;

  public ratings = [
    {
      stars: 1,
      text: 'bad',
    },
    {
      stars: 2,
      text: 'meh'
    },
    {
      stars: 3,
      text: 'it\'s ok'
    },
    {
      stars: 4,
      text: 'I\'d be sad if a black hole ate it'
    },
    {
      stars: 5,
      text: '10/10 would write review on Amazon'
    }
  ];
  public value: number;
  public ratingText: string;
  public disabled: boolean;

  private onChanged: any = () => { }
  private onTouched: any = () => { }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }

  registerOnTouched(fn: any): void {
    this.onChanged = fn;
  }

  setRating(star: any) {
    if (!this.disabled) {
      this.value = star.stars;
      this.ratingText = star.text;
      this.onChanged(star.stars);
      this.onTouched();
    }
  }
}
