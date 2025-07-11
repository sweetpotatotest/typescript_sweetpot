// 투표 항목
// 득표수
interface VoteOption {
  name: string,
  votes: number;
}

function createVoteOption(name: string): VoteOption {
  return {
    name,
    votes: 0
  }
}

//투표 함수
function vote(option: VoteOption): void {
  option.votes += 1;
  console.log(`${option.name}에 투표 완료, 현재 투표수 : ${option.votes}`);
}

// 모든사람 투표수 조회 하는 함수
// 입력으로 VoteOption []을 받아서 리턴은 없음
// 안에서 모든 투표의 투표수를 콘솔의 출력
function getVoteResult(options: VoteOption[]): void {
  options.forEach(option => {
    console.log(`${option.name} : ${option.votes} 표`)
  })
  console.log('----------------------------');
}

// 모든 투표의 최고 투표 항목을 찾아서 반환하는 함수
// 동점일 경우 첫 번째 항목을 반환
// 진행 중인 투표가 없는 경우 null 반환
// 입력으로 VoteOption []
function getWinner(options: VoteOption[]): void {
  let winOpNum: number = 0;
  let winOpName: String = "";
  options.forEach(option => {
    let opName: String = option.name;
    let opNum: number = option.votes;
    if (winOpNum < opNum) {
      winOpNum = opNum;
      winOpName = opName;
    }
  })
  console.log(winOpName + "님 우승 득표수:" + winOpNum)
}

function getWinner2(options: VoteOption[]): VoteOption | null {
  if (options.length === 0) {
    return null;
  }

  let winner = options[0];
  for (let a = 1; a < options.length; a++) {
    if (winner.votes < options[a].votes) {
      winner = options[a];
    }
  }
  return winner;
}

function main(): void {
  const menuOptions: VoteOption[] = [
    createVoteOption('김치찌개'),
    createVoteOption('된장찌개'),
    createVoteOption('제육볶음'),
    createVoteOption('돈까스'),
  ];
  //투표진행
  vote(menuOptions[0]);
  vote(menuOptions[2]);
  vote(menuOptions[3]);
  vote(menuOptions[0]);
  vote(menuOptions[2]);
  vote(menuOptions[0]);
  // 현재 투표 현황 출력
  getVoteResult(menuOptions);
  //최종 우승 항목 발표
  const winner = getWinner2(menuOptions);
  if(winner) {
    console.log(`오늘의 점심메뉴는 바로 ${winner.name}입니다. (${winner.votes}표)`)
  }
}
main();