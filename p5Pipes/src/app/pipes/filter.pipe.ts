import { Pipe, PipeTransform } from '@angular/core';
import { Post } from "../app.component";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', field: string = 'title'): Post[] {
    if(!search) return posts
	  
	  return posts.filter(post => post[field].toLowerCase().includes(search.toLowerCase().trim()))
  }

}
