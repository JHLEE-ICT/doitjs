var posts = [];
posts[0] = "자존심은 어리석은 자의 소유물이다.";
posts[1] = "후회를 최대한 이용하라. 깊이 후회한다는 것은 새로운 삶을 산다는 것이다.";
posts[2] = "많은 공부와 지식이 곧 지혜로 연결되는 것은 아니다.";
posts[3] = "필요하면 결코 좋은 흥정을 할 수 없다.";
posts[4] = "불신과 주의는 안전의 부모이다.";
posts[5] = "침묵은 오해하기 쉬운 글과 같다.";
posts[6] = "민주주의에 대한 최고의 반론은 평범한 유권자와의 5분 대화이다.";
posts[7] = "사랑으로 행해진 일은 언제나 선악을 초월한다.";
posts[8] = "소풍은 우리가 아이의 눈을 통해 음미할 수 있을 때 훨씬 더 즐겁다.";
posts[9] = "모든 잎이 꽃이 되는 가을은 두 번째 봄이다.";

var index = Math.floor(Math.random()*10);
document.write("<p>&quot;"+posts[index]+"&quot;</p>")