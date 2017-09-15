/* import React, { Component } from 'react';

export default class KDcounter extends Component {

  constructor() {
    super();
    this.state = {stats: []};
  }

  constructor(){
    destiny = Destiny('945ad1a0b05549c0a9845c9567952a4f');
  }

  componentWillMount() {
    var url =" http://www.bungie.net/d1/Platform/Destiny/Stats/ActivityHistory/{membershipType}/{destinyMembershipId}/{characterId}/"
  }
  
  render() {
    return (
      <div>
        <div className="1"><button>1</button></div>
        <div className="2">2</div>
      </div>
    );
  }
}
 */

 export const getKD = function() {
   return fetch('http://www.bungie.net/d1/Platform/Destiny/2/Account/4611686018429275110/Summary/')
   .then(res => res.json())
 }