import React from 'react'

function SidebarHeader() {
  return (
    <div className="sidebar__header">
      <h3>You Have Seen</h3>
      <h3> <span>0</span>/100 (0%)</h3>
      <input type="checkbox" id="watched" name="watched" />
      <label for="watched">Hide titles I've seen</label>
    </div>
  )
}

export default SidebarHeader
