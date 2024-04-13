import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LottieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test-lottie';

  options: AnimationOptions = {
    path: '/assets/server-down.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
