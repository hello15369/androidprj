    function createGroup(groupId, name, creatorId) {
        firebase.database().ref('groups/' + groupId).set({
            name: name,

        });
    }
    //사용자가 그룹에 들어감
    function joinGroup(uId,gId){
            var updates = {};
            // 그룹안에 멤버추가
            updates['/groups/' + gId + '/members/' + uId] =true;
              //유저에 그룹 추가
            updates['/users/' + uId + '/groups/' + gId] =true;
            return firebase.database().ref().update(updates);
     }
