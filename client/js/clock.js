!function() {

var Clock = {
  phase: 0,
  msgs: [],
  advance : function( advanceAmount ) {
    var end = this.phase + advanceAmount,
        nextMsg = this.msgs[ 0 ]
       
    // scheduleMessage will handle all messages recursively until end time
    if( nextMsg.time < end )
      this.scheduleMessage( nextMsg, end )
    
  },
  scheduleMessage: function( msg, endTime ) {
    if( msg.time < endTime ) {
      // add message
      // TODO
      // remove message
      this.msgs.splice( 0,1 )
      
      var nextMsg = this.msgs[ 0 ]
      if( nextMsg.time < endTime )
        this.scheduleMessage( nextMsg, endTime )
    }
  },
  addMessage: function( _msg, _time ) {
    this.msgs.push({ msg:_msg, time:_time })
  },
  removeMessage: function( msg ) {
    var idx = this.msgs.indexOf( msg )

    if( idx > -1 )
      this.msgs.splice( idx, 1 )
  }

}

module.exports = Clock

}()
