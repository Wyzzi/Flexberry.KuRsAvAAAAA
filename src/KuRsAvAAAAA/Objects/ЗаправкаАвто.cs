﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.KuRsAvAAAAA
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Заправка авто.
    /// </summary>
    // *** Start programmer edit section *** (ЗаправкаАвто CustomAttributes)

    // *** End programmer edit section *** (ЗаправкаАвто CustomAttributes)
    [AutoAltered()]
    [Caption("Заправка авто")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаправкаАвтоE", new string[] {
            "НомКол as \'Номер колонки\'",
            "НомШл as \'Номер шланга\'",
            "ЗаправБак.ТипТопл as \'Тип топлива\'",
            "ЗаправБак.Цена as \'Цена\'",
            "КолТоп as \'Количество топлива\'"})]
    [View("ЗаправкаАвтоL", new string[] {
            "НомКол as \'Номер колонки\'",
            "НомШл as \'Номер шланга\'",
            "ЗаправБак.ТипТопл as \'Тип топлива\'",
            "ЗаправБак.Цена as \'Цена\'",
            "КолТоп as \'Количество топлива\'"})]
    public class ЗаправкаАвто : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомКол;
        
        private int fНомШл;
        
        private int fКолТоп;
        
        private IIS.KuRsAvAAAAA.ЗаправБак fЗаправБак;
        
        // *** Start programmer edit section *** (ЗаправкаАвто CustomMembers)

        // *** End programmer edit section *** (ЗаправкаАвто CustomMembers)

        
        /// <summary>
        /// КолТоп.
        /// </summary>
        // *** Start programmer edit section *** (ЗаправкаАвто.КолТоп CustomAttributes)

        // *** End programmer edit section *** (ЗаправкаАвто.КолТоп CustomAttributes)
        public virtual int КолТоп
        {
            get
            {
                // *** Start programmer edit section *** (ЗаправкаАвто.КолТоп Get start)

                // *** End programmer edit section *** (ЗаправкаАвто.КолТоп Get start)
                int result = this.fКолТоп;
                // *** Start programmer edit section *** (ЗаправкаАвто.КолТоп Get end)

                // *** End programmer edit section *** (ЗаправкаАвто.КолТоп Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаправкаАвто.КолТоп Set start)

                // *** End programmer edit section *** (ЗаправкаАвто.КолТоп Set start)
                this.fКолТоп = value;
                // *** Start programmer edit section *** (ЗаправкаАвто.КолТоп Set end)

                // *** End programmer edit section *** (ЗаправкаАвто.КолТоп Set end)
            }
        }
        
        /// <summary>
        /// НомКол.
        /// </summary>
        // *** Start programmer edit section *** (ЗаправкаАвто.НомКол CustomAttributes)

        // *** End programmer edit section *** (ЗаправкаАвто.НомКол CustomAttributes)
        public virtual int НомКол
        {
            get
            {
                // *** Start programmer edit section *** (ЗаправкаАвто.НомКол Get start)

                // *** End programmer edit section *** (ЗаправкаАвто.НомКол Get start)
                int result = this.fНомКол;
                // *** Start programmer edit section *** (ЗаправкаАвто.НомКол Get end)

                // *** End programmer edit section *** (ЗаправкаАвто.НомКол Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаправкаАвто.НомКол Set start)

                // *** End programmer edit section *** (ЗаправкаАвто.НомКол Set start)
                this.fНомКол = value;
                // *** Start programmer edit section *** (ЗаправкаАвто.НомКол Set end)

                // *** End programmer edit section *** (ЗаправкаАвто.НомКол Set end)
            }
        }
        
        /// <summary>
        /// НомШл.
        /// </summary>
        // *** Start programmer edit section *** (ЗаправкаАвто.НомШл CustomAttributes)

        // *** End programmer edit section *** (ЗаправкаАвто.НомШл CustomAttributes)
        public virtual int НомШл
        {
            get
            {
                // *** Start programmer edit section *** (ЗаправкаАвто.НомШл Get start)

                // *** End programmer edit section *** (ЗаправкаАвто.НомШл Get start)
                int result = this.fНомШл;
                // *** Start programmer edit section *** (ЗаправкаАвто.НомШл Get end)

                // *** End programmer edit section *** (ЗаправкаАвто.НомШл Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаправкаАвто.НомШл Set start)

                // *** End programmer edit section *** (ЗаправкаАвто.НомШл Set start)
                this.fНомШл = value;
                // *** Start programmer edit section *** (ЗаправкаАвто.НомШл Set end)

                // *** End programmer edit section *** (ЗаправкаАвто.НомШл Set end)
            }
        }
        
        /// <summary>
        /// Заправка авто.
        /// </summary>
        // *** Start programmer edit section *** (ЗаправкаАвто.ЗаправБак CustomAttributes)

        // *** End programmer edit section *** (ЗаправкаАвто.ЗаправБак CustomAttributes)
        [PropertyStorage(new string[] {
                "ЗаправБак"})]
        [NotNull()]
        public virtual IIS.KuRsAvAAAAA.ЗаправБак ЗаправБак
        {
            get
            {
                // *** Start programmer edit section *** (ЗаправкаАвто.ЗаправБак Get start)

                // *** End programmer edit section *** (ЗаправкаАвто.ЗаправБак Get start)
                IIS.KuRsAvAAAAA.ЗаправБак result = this.fЗаправБак;
                // *** Start programmer edit section *** (ЗаправкаАвто.ЗаправБак Get end)

                // *** End programmer edit section *** (ЗаправкаАвто.ЗаправБак Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ЗаправкаАвто.ЗаправБак Set start)

                // *** End programmer edit section *** (ЗаправкаАвто.ЗаправБак Set start)
                this.fЗаправБак = value;
                // *** Start programmer edit section *** (ЗаправкаАвто.ЗаправБак Set end)

                // *** End programmer edit section *** (ЗаправкаАвто.ЗаправБак Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаправкаАвтоE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаправкаАвтоE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаправкаАвтоE", typeof(IIS.KuRsAvAAAAA.ЗаправкаАвто));
                }
            }
            
            /// <summary>
            /// "ЗаправкаАвтоL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаправкаАвтоL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаправкаАвтоL", typeof(IIS.KuRsAvAAAAA.ЗаправкаАвто));
                }
            }
        }
    }
}
